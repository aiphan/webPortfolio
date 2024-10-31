function handleSubmit(event){
    event.preventDefault(); 
    const name= docment.getElementByID('name').value;
    const email = document.getElementById('email').value;
    alert(`Your message has been submitted. Thank you, ${name}! We will contact you at ${email}.`);
    event.target.submit();

}