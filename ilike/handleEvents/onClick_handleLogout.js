import { logout } from "@js_dir/utils/membership";
export function onClick_handleLogout(session, e) {
    e.preventDefault();
    logout(session);
}