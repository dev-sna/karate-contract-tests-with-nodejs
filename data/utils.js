var createSuccessResponse = function (data) {
    return {
      success: true,
      data: data,
    };
  };
  
var generate_query = function (employee_type) {
    return {
        employee_type: employee_type
    }
}