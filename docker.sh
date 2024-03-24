echo "Welcome to the Docker Command Line Interface"
echo "-----------------------------------------"

if [ "$1" == "build" ]; then
    docker build -f Dockerfile -t unite-patient-frontend .
    elif [ "$1" == "run" ]; then
    docker run -it -p 3001:3001 unite-patient-frontend
    elif [ "$1" == "help" ]; then
    echo "build: builds the docker image"
    echo "run: runs the docker image"
else
    echo "Please enter a valid command"
fi