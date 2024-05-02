describe('US16_Vice Dean, kullanicilarin gönderdiği mesajlari görebilmelidir', () => {
 
    
        let loginData
        let contactData
  
        before(() => {
            cy.fixture('login_data').then((data) => {
                loginData = data
            })
           cy.fixture('contact_get_all_data').then((data) => {
            contactData = data
            })
           
        });
    
     
      
      it('US16_TC02_Vice Dean, mesajlari, yazarlarini, e-maillerini, gönderilme tarihi ve  subject bilgilerini görüntüleyebilmelidir', ()=> {
        cy.on('uncaught:exception', (err, runnable) => {
          return false
        })
    
        //token olustur
        cy.generateToken(loginData.ViceDeanUsername,loginData.ViceDeanPasword).then(
          (token) => {
          console.log(token)
    
          cy.request({
            method: "GET",
            url: contactData.getContactURL,
            headers: {
              Authorization:`${token}`,
            },
          }).then((response) => {
           
 expect(response.status).to.eq(200);
 console.log(response.body);
 
 expect(response.body.content[0]).to.have.property( "name"); 
 expect(response.body.content[0]).to.have.property( "email"); 
 expect(response.body.content[0]).to.have.property( "subject"); 
 expect(response.body.content[0]).to.have.property( "message"); 
 expect(response.body.content[0]).to.have.property(  "date"); 


          });
        })
      });
    

    
          });
       