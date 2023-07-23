Feature: Employees API contract tests

  Background:
    * configure headers = { 'Content-Type': 'application/json' }
    * def data = read(base_path + '/contract-tests/data.js')
    * def schema = create_schema(employeesData)
    * def endpoint = base_url + '/employees/filter'
    * def root_obj =
      """
      {
      success: '#boolean',
      message: '#string',
      data: '#(schema)'
      }
      """

  Scenario Outline: Current query -> type: <type>
    Given url endpoint
    * def employee_query = generate_query(<type>)
    And request employee_query
    And method post
    Then status 200
    Then match response == '#(root_obj)'

    Examples:
      | type        |
      | "MANAGER"   |
      | "DEV"       |