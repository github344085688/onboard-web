import BaseService from "./_base-service";

class SideBarService extends BaseService {

  warehousing() {
    return [

      {
        "title": "Onboarding Wizard",
        "imgSrc": "static/img/inventory.svg",
        "url": "",
        "state": "OnboardingWizard",
        "display": "none",
         "subMenu": [
          {
            "title": "UIComponent",
            "routerName": "UIComponent",
            "display": "none",
            "state": "OnboardingWizard.UIComponent",
          },
          {
            "title": "Progress Board",
            "routerName": "ProgressBoard",
            "display": "none",
            "state": "OnboardingWizard.ProgressBoard",
          }, {
            "title": "Create Account",
            "routerName": "CreateAccount",
            "display": "none",
            "state": "OnboardingWizard.CreateAccount",
          }, {
            "title": "Setup Billing",
            "routerName": "SetupBilling",
            "display": "none",
            "state": "OnboardingWizard.SetupBilling",
          },
        ]
      },
    ];
  }

}

let sideBarService = new SideBarService();
export default sideBarService;
