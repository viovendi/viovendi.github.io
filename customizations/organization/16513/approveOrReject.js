var approve = document.querySelector('.approve');
       var reject = document.querySelector('.reject');
       var orderId = document.querySelector('#orderId');
       approve.style.cursor = 'pointer';

       console.log(orderId.textContent.trim())

       function sendRequst(data){
        const url = 'https://hook.doo.integromat.celonis.com/ugdfseg5ikb3npcy8eyrpubvceljmcrl';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .catch(error => console.error('Error:', error));

       }

       approve.addEventListener("click", ()=>{
        sendRequst({status:"active", orderId: orderId.textContent.trim()})
       });

       reject.addEventListener("click", ()=>{
        sendRequst({status:"reject", orderId: orderId.textContent.trim()})
       });