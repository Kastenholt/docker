echo "Deploying changes..."

git pull

docker build -t react_nginx .

docker-compose down

docker-compose up -d
echo "Deployed!"