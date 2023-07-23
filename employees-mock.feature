Feature: As a tester, I would like to mock all api data of member modules

    Background:
        * def DIR_PATH = 'data/'
        * def URL_PREFIX = '/api/'
        * def data = read(DIR_PATH + 'readRequiredFiles.js')
        * def utils = read('data/utils.js')

    Scenario: pathMatches(URL_PREFIX + 'employees') && methodIs('GET')
        * def response = createSuccessResponse(employeesData)