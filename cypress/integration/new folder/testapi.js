
describe('Http example', function(){

    let token;
    let id;

    it('Access Token', function(){
        cy.request({
            method: 'POST',
            url: 'shipper-users/login',
            body: {
                "password": "bootcamp123",
                "username": "bootcamp"
              },
             
        }).then(function(response){
            token = (response.body.access_token);
        })
    });
    let gPhone;
    let gId;
    it('GET',function(){
        cy.request({
            method:'GET',
            url:'couriers/',
            headers:{
                'Authorization': token
            }
        }).then(function(response){
            gId = (response.body.couriers['0'].id);
            gPhone = (response.body.couriers['0'].phone);
        });
    });
    let lName = "Depp";
    it('POST', function(){
        cy.request({
            method:'POST',
            url:'couriers/',
            body: {
                    "first_name": "Johny",
                    "is_working": false,
                    "last_name": lName,
                    "max_orders_count": 0,
                    "phone": "+998" + Math.floor((99999999 + Math.random() * (1000000000 - 99999999)))
                  },
            headers:{
                'content-type': 'application/json',
                'Authorization': token
            }      
        }).should(function(response){
            expect(response.status).to.equal(200);
            id = (response.body.id);
        });
    });

    it('GET',function(){
        cy.request({
            method:'GET',
            url:'couriers/' + id,
            headers:{
                'Authorization': token
            }
        }).should((response) => {
            expect(response.body.last_name).to.equal(lName);
        })
    });

    let pPhone;

    it('PUT',function(){
        cy.request({
            method:'PUT',
            url:'couriers/' + id,
            body: {
                   "first_name": "Johny",
                   "is_working": false,
                   "last_name": "Deppo",
                   "max_orders_count": 0,
                   "phone": "+998" + Math.floor((99999999 + Math.random() * (1000000000 - 99999999)))
                  },
            headers:{
                'Authorization': token
            }      
        }).then(function(response){
            pPhone = (response.body.phone);
        });
    });

    it('GET',function(){
        cy.request({
            method:'GET',
            url:'couriers/' + id,
            headers:{
                'Authorization': token
            }
        }).should((response) => {
            expect(response.body.phone).to.equal(pPhone);
        })
    });

    it('DELETE',function(){
        cy.request({
            method:'DELETE',
            url:'couriers/' + id,
            headers:{
                'Authorization': token
            }      
        }).then(function(response){
            expect(response.body).to.have.property('answer', 'success')
        });
    });

    it('GET',function(){
        cy.request({
            method:'GET',
            url:'search-couriers/?phone=' + gPhone.substring(1),
            headers:{
                'Authorization': token
            }
        }).should((response) => {
            expect(response.body.couriers['0'].id).to.eq(gId);
        })
    });
});