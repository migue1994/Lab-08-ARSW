{
	"info": {

		"id": "",
		"name": "app_name",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},

	"item": [

		{
			"name": "Number 100000",

			"request": {

				"method": "POST",
				"header": [],
				"body": {
						"mode": "raw",
						"raw": "{\n\t\"nth\":1000000\n}",
						"options": {
									"raw": {
											"language": "json"
									}
						}
				},

				"url": {
					"raw": " ",
					"protocol": "https",
					"host": [
						" ",
						"azurewebsites",
						"net"					
					],
	
					"path": [
						"api",
						"Fibonacci"
					]
				}
			},
	
			"response": []
		}		
	],

	"protocolProfileBehavior": {}
}
