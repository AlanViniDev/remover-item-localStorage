<script>

    var aux = [
     "a","b","c","d"
    ];

    var aux2 = [];
    
    localStorage.setItem("aux", aux);
    
    console.log(aux);

    var aux2 = aux.splice(1,5);

    localStorage.setItem("aux2", aux2);

    localStorage.getItem("aux2");

    console.log(aux2); 
    
</script>
