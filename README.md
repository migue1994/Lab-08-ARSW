### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/en-us/free/search/?&ef_id=Cj0KCQiA2ITuBRDkARIsAMK9Q7MuvuTqIfK15LWfaM7bLL_QsBbC5XhJJezUbcfx-qAnfPjH568chTMaAkAsEALw_wcB:G:s&OCID=AID2000068_SEM_alOkB9ZE&MarinID=alOkB9ZE_368060503322_%2Bazure_b_c__79187603991_kwd-23159435208&lnkd=Google_Azure_Brand&dclid=CjgKEAiA2ITuBRDchty8lqPlzS4SJAC3x4k1mAxU7XNhWdOSESfffUnMNjLWcAIuikQnj3C4U8xRG_D_BwE). Al hacerlo usted contará con $200 USD para gastar durante 1 mes.

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.


6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.


**Preguntas**

* ¿Qué es un Azure Function?

    Azure Functions es un servicio de cómputo sin servidor que le permite ejecutar código activado por eventos sin tener que aprovisionar o administrar explícitamente la infraestructura.

* ¿Qué es serverless?

    Una arquitectura sin servidor permite a los usuarios escribir e implementar código sin la molestia de preocuparse por la infraestructura subyacente.

* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?

    El runtime indica el lenguaje que se va a usar en la function app, cuando esta se crea, el runtime implica la versión de lenguaje en la cual esta desarrollado el proyecto, entre mas alto sea el nivel de runtime, mas recientes serán las versiones con las que se trabajará

* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?

    La cuenta de almacenamiento proporciona un espacio de nombres único para sus datos de Azure Storage al que se puede acceder desde cualquier lugar del mundo a través de HTTP o HTTPS. Los datos en su cuenta de almacenamiento de Azure son duraderos y altamente disponibles, seguros y escalables de forma masiva.

* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.

    Cuando crea una aplicación de función en Azure, debe elegir un plan de alojamiento para su aplicación. Hay tres planes de alojamiento disponibles para Azure Functions: plan de consumo, plan Premium y plan dedicado (servicio de aplicaciones).

    El plan de alojamiento que elija dicta los siguientes comportamientos:

    - Como es el escalamiento de la función.
    - Los recursos disponibles para cada instancia de aplicación de función.
    - Compatibilidad con funciones avanzadas, como la conectividad de Azure Virtual Network.

    **Plan de consumo:**

    Cuando usa el plan de consumo, las instancias del host de Azure Functions se agregan y eliminan dinámicamente según la cantidad de eventos entrantes. Este plan sin servidor se escala automáticamente y se le cobra por los recursos de cómputo solo cuando se ejecutan sus funciones. En un plan de consumo, la ejecución de una función agota el tiempo de espera después de un período de tiempo configurable.

    **Plan premium**

    Cuando usa el plan Premium, las instancias del host de Azure Functions se agregan y eliminan en función de la cantidad de eventos entrantes, como el plan de consumo. El plan Premium admite las siguientes características:

    - Instancias perpetuamente calientes para evitar cualquier arranque en frío. 
    - Conectividad VNet Duración de ejecución ilimitada (60 minutos garantizados) 
    - Tamaños de instancias premium (instancias de un núcleo, dos núcleos y cuatro núcleos) 
    - Precios más predecibles 
    - Asignación de aplicaciones de alta densidad para planes con aplicaciones de funciones múltiples

    **Plan de servicio dedicado.**

    Sus aplicaciones de función también pueden ejecutarse en las mismas máquinas virtuales dedicadas que otras aplicaciones de App Service (SKU básicas, estándar, premium y aisladas).

    Considere un plan de App Service en las siguientes situaciones:

    - Tiene máquinas virtuales existentes y subutilizadas que ya están ejecutando otras instancias de App Service. 
    - Desea proporcionar una imagen personalizada en la que ejecutar sus funciones.


* ¿Por qué la memoization falla o no funciona de forma correcta?

    Esto ocurre debido 

* ¿Cómo funciona el sistema de facturación de las Function App?

    El uso se agrega a nivel de aplicación de función y solo cuenta el tiempo que se ejecuta el código de función. Las siguientes son unidades para facturación:

    - Consumo de recursos en gigabytes-segundos (GB-s). Calculado como una combinación de tamaño de memoria y tiempo de ejecución para todas las funciones dentro de una aplicación de función.

    - Ejecuciones Se cuenta cada vez que se ejecuta una función en respuesta a un evento desencadenante.

    Precios de Azure Functions

    El plan de consumo de Azure Functions se factura en función del consumo de recursos y las ejecuciones por segundo. Los precios del plan de consumo incluyen una concesión gratuita mensual de 1 millones de solicitudes y 400.000 GB-segundos de consumo de recursos por suscripción en el modelo de precios de pago por uso, para todas las aplicaciones de funciones de esa suscripción. El plan Azure Functions Premium proporciona un rendimiento mejorado y se factura por segundo en función del número de vCPU/s y de GB/s que consuman sus funciones premium. Los clientes también puede ejecutar Functions dentro de su plan de App Service a las tarifas normales del plan de App Service.

    ![](/images/Informe/8.png)

* Informe

    ### Función desplegandonce desde visual studio code.

    ![](/images/Informe/1.png)

    ### Creación de los archivos .json

    #### [ARSW_LOAD-BALANCING_AZURE].postman_environment.json

    ![](/images/Informe/2.png)

    #### ARSW_LOAD-BALANCING_AZURE.postman_collection.json

    ![](/images/Informe/3.png)

    ### Resultados.

    Una vez que se haya creado el ambiente de trabajo para ejecutar newman, ejecutamos las peticiones recurrentes, el resultado fue el siguiente:

    ![](/images/Informe/4.png)

    Como podemos ver, la cantidad de tiempo usado para realizar las peticiones fue de más de 15 min, esto nos indica que la función se demora bastante en realizar el calculo de la secuencia de fibonacci para un valor de 1000000, adicionelmente, vemos que ninguna de las peticiones falló, lo cual indica un alto grado de confiabilidad por parte del servicio.

    ## Función recurrente de fibonacci

    ![](/images/Informe/5.png)

    ## Primeras peticiones

    ![](/images/Informe/6.png)

    ## Peticiones después de 5 minutos.

    ![](/images/Informe/7.png)

    Como podemos ver en las imagenes anteriores, se puede observar que la función resulve el problema en menos tiempo, por otro lado, al haber un sistema de almecenamento en el algoritmo, este permite responder la socitudes siguientes, acasi de manera instantanea.

    Cuando volvemos a realizar las mismas peticiones después de 5 minutos, la respuesta es mucho más rápida, esto puede deberse a lo antes mencionado.

