
<script>

    var aux = [
     "a","b","c","d"
    ];

    var aux2 = [];
    
    localStorage.setItem("aux", aux);
    
    console.log(aux);

    var aux2 = aux.splice(2,1);

    localStorage.setItem("aux2", aux2);

    localStorage.setItem("aux", aux2);

    localStorage.getItem("aux2");

    console.log(aux);
    console.log(aux2); 
    
</script>
