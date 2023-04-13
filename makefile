create:
	docker build . -t test_task_av100_image
delete:
	docker rmi test_task_av100_image
run:
	docker run -d -p 8080:8080 --rm --name test_task_av100_container test_task_av100_image
stop:
	docker stop test_task_av100_container