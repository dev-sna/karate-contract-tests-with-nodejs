function() {
  var env = karate.env;
  // TODO: Uncomment and use IP for local runs
  var baseURL= "http://192.168.176.218:3000"
  var config = {
    base_url: baseURL + '/api',
    base_path: '/app/',
  };

  karate.configure('connectTimeout', 600000);
  karate.configure('readTimeout', 600000);
  karate.configure('retry', { count: 30, interval: 5000 });
  var configure_headers = function(){
    var endpoint = karate.get('endpoint')
    if (!endpoint){
      throw ("Please configure endpoint for the failed feature, filename: " + karate.info.featureFileName +
      ", Scenario name: " + karate.info.scenarioName)
    }
    endpoint = endpoint.split('?')[0]
    print("*******API URL is: ", endpoint)
  }
  // Headers hook is used to identify unique number of API hits we got
  karate.configure('headers', configure_headers)
  return config;
}
