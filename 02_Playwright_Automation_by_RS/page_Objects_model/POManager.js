const {LoginPage} = require('./Loginpage');
const {Dashboardpage} = require('./Dasboardpage');

class POManager{
    constructor(page){
        this.page = page;
         this.loginPage = new LoginPage(this.page);
         this.dashboardpage = new Dashboardpage(this.page);
    }
    getLoginPage(){
        return this.loginPage;
    }

    getdashboardpage(){
        return this.dashboardpage;
    }

}
module.exports={POManager}