module.exports = ({ axios, settings }) => async () => {

    const data = JSON.stringify({
        "origin": {
           "name": "jose",
           "company": "oskys factory",
           "email": "jose@mail.com",
           "phone": "8116300800",
           "street": "av vasconcelos",
           "number": "1400",
           "district": "mirasierra",
           "city": "Monterrey",
           "state": "NL",
           "country": "MX",
           "postalCode": "66236",
           "reference": ""
        },
        "destination": {
           "name": "maria",
           "company": "empresa",
           "email": "maria@mail.com",
           "phone": "8116300800",
           "street": "av vasconcelos",
           "number": "1400",
           "district": "palo blanco",
           "city": "monterrey",
           "state": "NL",
           "country": "MX",
           "postalCode": "66240",
           "reference": ""
        },
        "packages": [
           {
              "content": "calzado de mujer",
              "amount": 1,
              "type": "box",
              "dimensions": {
                 "length": 1,
                 "width": 17,
                 "height": 2
              },
              "weight": 2,
              "insurance": 200,
              "declaredValue": 400,
              "weightUnit": "KG",
              "lengthUnit": "CM"
           }
        ],
        "shipment": {
           "carrier": "fedex",
           "service": "express",
           "type": 1
        },
        "settings": {
           "printFormat": "PDF",
           "printSize": "STOCK_4X6",
           "comments": "comentarios de el envío"
        }
     });
    
    const config = {
        method: 'post',
        url: `${settings.BASE_URL}/ship/generate`,
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${process.env.TOKEN}`
        },
        data : data
    };
    
    try {
      const result = await axios(config);
      return {
         payload: result.data || {}
      };
    } catch (error) {
      return { error };
    }

}