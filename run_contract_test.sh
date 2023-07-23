let status=1
let timeout=60
let elapsedTime=0
let interval=5
while [[ $status == 1 ]] ;
do
    nc -vz backend 8080
    status=$( echo $? )
    if [[ $status == 1 ]] ; then
        echo "Waiting for backend ..."
        sleep $interval
        elapsedTime=$(($elapsedTime + $interval))
        if [[ $elapsedTime -ge $timeout ]] ; then
            echo "Timeout reached. Exiting ..."
            exit 0
        fi
    else
        echo "Backend is running! Starting Apitest ..."
    fi
done

java -jar -Dlogback.configurationFile=/app/logback-test.xml -Dkarate.config.dir=/app /app/karate-0.9.5.jar -T 5 /app/contract-tests/employees-contract.feature
