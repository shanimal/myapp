http://expressjs.com/starter/generator.html
# post-commit curl a jenkins build
echo 'curl http://localhost:8081/job/myapp%20local/build?delay=0sec' >> .git/hooks/post-commit

built with http://expressjs.com/starter/generator.html
npm test
jenkins
	local
		execute shell
			npm test
		advanced 
			Directory =/Users/shthrasher/Desktop/sites/d2d/myapp
		Post-build Actions
			Publish JUnit test result report
				Test report XMLs=test-reports.xml