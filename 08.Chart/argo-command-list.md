## ArgoCD의 경우 PVC가 따로 필요하지 않아 helm 내에 몇가지 변수명 추가하는 방식으로 사용

```shell
# ArgoCD 네임스페이스 추가
kubectl create namespace argocd

# ArgoCD Helm Chard 추가 및 업데이트
helm repo add argo https://argoproj.github.io/argo-helm
helm repo update

# ArgoCD의 서비스를 LB로 변경
# LB의 IP를 192.168.219.92로 고정
helm upgrade argo-cd argo/argo-cd \
  --namespace argocd \
  --set server.service.type=LoadBalancer \
  --set server.service.loadBalancerIP=192.168.219.92
```