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