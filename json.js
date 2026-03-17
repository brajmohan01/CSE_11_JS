var text = '{"employee":[' +
'{"firstName":"John", "lastName":"Doe"},' +
'{"firstName":"Anna", "lastName":"Smith"},' +
'{"firstName":"Peter", "lastName":"Jones"}]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employee[0].firstName + " " + obj.employee[0].lastName;
