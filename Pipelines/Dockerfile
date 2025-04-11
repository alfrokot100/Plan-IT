FROM python:3.13-alpine
WORKDIR /api
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY main.py .
ENTRYPOINT ["fastapi", "run", "main.py"] 
COPY portainer.py .


