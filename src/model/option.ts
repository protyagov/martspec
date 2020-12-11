//--------------------------------------------------------------------------------------------------------------
// User object allways exists. NULL role is used to detect logged in status for now.
export default class UserModel {
    id: number;
    email: string = "";
    password: string = "";
    name: string = "";
    emailConfirmed: boolean;
    role: UserRole;
    imageUrl: string;
    recruiterId: number;
    recruiterSlug: string;
    ucode: string;
    

    static removeEmpty(obj: any) {
        Object.entries(obj).forEach(([key, val]) => {
            if (val && typeof val === 'object') this.removeEmpty(val)
            else if (val == null) delete obj[key]
        })
    }
}

//--------------------------------------------------------------------------------------------------------------
export enum UserRole {
    User = "USER",
    Reqr = "RECRUITER",
    Admin = "ADMIN"
}

//--------------------------------------------------------------------------------------------------------------
export enum PageOptionMenu {
    Account = 0,    
    Notifications = 1,
    AbuseRecruiters = 2,
    AbuseReviews = 3,
    Settings = 4,
    Manage = 5,
    Agency = 6
}

//--------------------------------------------------------------------------------------------------------------
export class PageOptionState {
    static defaultQuery = '{"groupOp":"AND","rules":[{"field":"filter","op":"in","data":""}]}';

    navBarTitle: string = "Admin Panel";

    dslNameCollection: { [id: number]: string };
    selectedMenu: PageOptionMenu;
    selectedMenuRElement: React.ReactElement;
    isLoading: boolean = false;

    setSelectedMenu: (menu: PageOptionMenu) => void;
    setIsLoading: (value: boolean) => void;
}
