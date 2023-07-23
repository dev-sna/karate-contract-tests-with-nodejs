Feature: Employees API contract tests

  Background:
    * def data = read(base_path + '/contract-tests/data.js')
    * def schema = create_schema(employeesData)
    * def endpoint = base_url + '/employees/'
    * def root_obj =
      """
      {
      success: '#boolean',
      message: '#string',
      data: '#(schema)'
      }
      """

  Scenario: All Employees API
    Given url endpoint
    And method get
    Then status 200
    Then match response == '#(root_obj)'