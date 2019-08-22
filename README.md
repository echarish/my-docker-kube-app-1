# my-docker-kube-app-1

This project works on creating a microservie sample on docker and kubernates

#### Some important commands that I use are below

**DOCKER**

* docker build -t echarish/my-app .
* docker run -p 49160:3000 -d echarish/my-app
* docker logs <container id>
* docker exec -it <container id> /bin/bash


**TO PUSH INTO GCP**
* docker tag [SOURCE_IMAGE] [HOSTNAME]/[PROJECT-ID]/[IMAGE]
  * docker tag echarish/my-app asia.gcr.io/firstdemoproject-250304/my-app
* docker push asia.gcr.io/firstdemoproject-250304/my-app

**I am using Minikube for my kubernates**

Some important commands for minikube
* minikube start
  * This is to start minikube
* minikube dashboard
  * If you like working with dashboard GUI
* minikube tunnel
  * If you create a service loadbalancer run above command to get external IP enabled


Some important commands for cubectl
* cubectl create -f <File_Name>
  * File_Name can be your deployement.yaml or service.yaml etc



