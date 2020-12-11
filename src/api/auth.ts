import * as request from "superagent";
import * as toastr from "toastr";
import { API_BASE_URL } from "src/env";
import UserModel, { UserRole } from "src/model/option";
import UserNotification from "src/model/notification";

export const UI_BASE_URL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
export const UI_REDIRECT_URL = `${UI_BASE_URL}/auth/social`
export const GOOGLE_AUTH_URL = API_BASE_URL + 'oauth2/authorize/google?redirect_uri=' + UI_REDIRECT_URL;
export const FACEBOOK_AUTH_URL = API_BASE_URL + 'oauth2/authorize/facebook?redirect_uri=' + UI_REDIRECT_URL;
export const LINKEDIN_AUTH_URL = API_BASE_URL + 'oauth2/authorize/linkedin?redirect_uri=' + UI_REDIRECT_URL;

export default class AuthAPI {
    private static _user: UserModel;
    private static _token: string;
    private static _tokenExp: number;


    //-------------------------------------------------------------------------------------------------------
    static login(user: UserModel): Promise<void> {
        return request
            .post(API_BASE_URL + 'v1/auth/login')
            .set({ 'Content-Type': 'application/json', 'accept': '*/*' })
            .send(user)
            .then(res => {
                localStorage.setItem('user_email', user.email);
                this.token = res.body['accessToken'];
                this.user = user;
            })
    }

    //-------------------------------------------------------------------------------------------------------
    static forgotPassword(email: string): Promise<void> {
        return request
            .post(API_BASE_URL + 'v1/auth/forgotPassword')
            .set({ 'Content-Type': 'application/json', 'credentials': 'same-origin' })
            .send({ "email": email })
            .then(() => { toastr.success("We just sent you password reset link.", "Please check your email.") });
    }

    //-------------------------------------------------------------------------------------------------------
    static resetPassword(code: string, pass: string): Promise<void> {
        return request
            .post(`${API_BASE_URL}v1/auth/resetPassword/${code}`)
            .set({ 'Content-Type': 'application/json', 'credentials': 'same-origin' })
            .send({ "password": pass })
            .then(res => {
                this.token = res.body['accessToken']
                toastr.success("Password sucessfully saved.");
            });
    }

    //-------------------------------------------------------------------------------------------------------
    static resetPasswordVerifyCode(code: string): Promise<void> {
        return request
            .get(`${API_BASE_URL}v1/auth/resetPassword/${code}`)
            .set({ 'Content-Type': 'application/json', 'credentials': 'same-origin' })
            .then();
    }

    //-------------------------------------------------------------------------------------------------------
    static register(user: UserModel, code: string = null): Promise<string> {
        return request
            .post(API_BASE_URL + 'v1/auth/signup')
            .set({ 'Content-Type': 'application/json', 'accept': '*/*' })
            .send({ ...user, code: code })
            .then(res => {
                this.token = res.body['accessToken'];
                this.user = user;
                localStorage.setItem('user_email', user.email);
                toastr.success('Account has been created');
                const slug = res.body['recruiterSlug'];
                if (slug)
                    this.user.emailConfirmed = true;
                return slug;
            })
    }

    //-------------------------------------------------------------------------------------------------------
    static confirmEmail(code: string): Promise<void> {
        return request
            .post(`${API_BASE_URL}v1/auth/confirmEmail/${code}`)
            .set({ 'Content-Type': 'application/json', 'credentials': 'same-origin' })
            .then();
    }

    //-------------------------------------------------------------------------------------------------------
    static securityCodeConfirm(code: string): Promise<void> {
        return request
            .post(`${API_BASE_URL}v1/users/current/securityCode`)
            .set(AuthAPI.authHeaders)
            .send({ "code": code })
            .then();
    }

    //-------------------------------------------------------------------------------------------------------
    static securityCodeRequest(): Promise<void> {
        return request
            .put(`${API_BASE_URL}v1/users/current/securityCode`)
            .set(AuthAPI.authHeaders)
            .then();
    }

    //-------------------------------------------------------------------------------------------------------
    static admin_RunSitmeMapBuild(): Promise<void> {
        return request
            .post(API_BASE_URL + 'v1/admin/buildSiteMap')
            .set(AuthAPI.authHeaders)
            .then(res => { })
    }
    //-------------------------------------------------------------------------------------------------------
    static admin_SendMassEmailToUnclaimedProfiles(): Promise<void> {
        return request
            .post(API_BASE_URL + 'v1/admin/sendClaimProfileReminders')
            .set(AuthAPI.authHeaders)
            .then(res => { })
    }
    //-------------------------------------------------------------------------------------------------------
    // USER API and MANAGE
    //-------------------------------------------------------------------------------------------------------
    /**
     * Get user profile from API based on current token
     * @returns  user model.
     */
    static userRead(): Promise<UserModel> {
        return request
            .get(API_BASE_URL + 'v1/users/current')
            .set(AuthAPI.authHeaders)
            .then(res => {
                this.user = res.body;
                localStorage.setItem('user_email', this._user.email);
                return this._user;
            })
    }
    //-------------------------------------------------------------------------------------------------------
    static userAvatarUpload(data: any, dataType: string = "image/png"): Promise<void> {
        return request
            .patch(API_BASE_URL + 'v1/users/current/image')
            .set(AuthAPI.authHeadersNoContentType)
            .attach('file', data, { contentType: dataType })
            .then(res => {
                console.log(res);
            })
    }

    //-------------------------------------------------------------------------------------------------------
    static userUpdate(user: UserModel): Promise<UserModel> {
        return request
            .patch(API_BASE_URL + 'v1/users/current')
            .set(AuthAPI.authHeaders)
            .send(user)
            .then(res => {
                this.user = res.body;
                return this._user;
            })
    }

    //-------------------------------------------------------------------------------------------------------
    static userDelete(userId: number): Promise<void> {
        return request
            .delete(API_BASE_URL + 'v1/users/' + userId)
            .set(AuthAPI.authHeaders)
            .then(r => { toastr.warning("Account has been deleted"); })
    }

    //-------------------------------------------------------------------------------------------------------
    static resendEmailConfirmLink(): Promise<void> {
        return request
            .post(API_BASE_URL + 'v1/users/current/confirmEmail')
            .set(AuthAPI.authHeaders)
            .then(r => { })
    }

    //-------------------------------------------------------------------------------------------------------
    // Notifications
    //-------------------------------------------------------------------------------------------------------
    static userNotificationFetch(uCode: string): Promise<UserNotification> {
        return request
            .get(API_BASE_URL + 'v1/notifications/' + uCode)
            .set({ 'Content-Type': 'application/json', 'accept': '*/*' })
            .then(res => res.body as UserNotification)
    }

    //-------------------------------------------------------------------------------------------------------
    static userNotificationUpdate(uCode: string, notify: UserNotification): Promise<void> {
        return request
            .patch(API_BASE_URL + 'v1/notifications/' + uCode)
            .set({ 'Content-Type': 'application/json', 'accept': '*/*' })
            .send(notify)
            .then(res => { res.body })
    }


    //-------------------------------------------------------------------------------------------------------
    // Static access to browswer stored values
    //-------------------------------------------------------------------------------------------------------
    static get user(): UserModel {
        if (!this._user) {
            this._user = sessionStorage.getJson('user') as UserModel;
            if (!this._user)
                this._user = new UserModel();
        }
        return this._user;
    }

    //-------------------------------------------------------------------------------------------------------
    static set user(value: UserModel) {
        this._user = value;
        sessionStorage.setItem('user', JSON.stringify(value));
    }

    //-------------------------------------------------------------------------------------------------------
    static get token(): string {
        if (!this._token)
            this._token = sessionStorage.getItem('user_token');
        return this._token;
    }

    //-------------------------------------------------------------------------------------------------------
    static get tokenExp(): number {
        if (!this._tokenExp)
            this._tokenExp = +sessionStorage.getItem('user_token_exp');
        return this._tokenExp;
    }

    //-------------------------------------------------------------------------------------------------------
    static set token(value: string) {
        this._token = null;
        sessionStorage.setItem('user_token', value);
        const tp = JSON.parse(atob(value.split('.')[1]));
        this._tokenExp = tp.exp;
        sessionStorage.setItem('user_token_exp', tp.exp)
    }

    //-------------------------------------------------------------------------------------------------------
    static get isLoggedIn(): boolean {
        const currentTime = Math.round((new Date()).getTime() / 1000);
        return this.token != null && this.tokenExp > currentTime;
    }

    //-------------------------------------------------------------------------------------------------------
    static get isUserAdmin(): boolean {
        return this.user && this.user.role === UserRole.Admin;
    }

    //-------------------------------------------------------------------------------------------------------
    static logout() {
        delete localStorage.user_email;
        delete sessionStorage.user_token;
        delete sessionStorage.user;
        this._token = null;
        this._tokenExp = 0;
        this._user = new UserModel();
    }

    //-------------------------------------------------------------------------------------------------------
    static get authHeaders(): {} {
        return {
            'Content-Type': 'application/json',
            'credentials': 'same-origin',
            'Authorization': 'Bearer ' + this.token
        }
    }
    //-------------------------------------------------------------------------------------------------------
    static get authHeadersNoContentType(): {} {
        return {
            'credentials': 'same-origin',
            'Authorization': 'Bearer ' + this.token
        }
    }
}