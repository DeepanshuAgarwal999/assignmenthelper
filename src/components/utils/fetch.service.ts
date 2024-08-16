import { store } from "@/redux/Store";
import { selectCurrentUser } from "@/redux/slices/user.slice";

export class FetchService {
  BACKEND_URL!: string;
  token: string | null;
  public constructor() {
    const state = store.getState();
    const { token } = selectCurrentUser(state);
    this.token = token;
    this.BACKEND_URL = import.meta.env.VITE_BASE_URL;
  }

  async get<T>(url: string) {
    const response = await fetch(this.BACKEND_URL + url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    const result = (await response.json()) as APIResponse<T>;

    return { status: response.status, response: response, data: result };
  }

  async post<T>(url: string, body: any) {
    const response = await fetch(this.BACKEND_URL + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    });

    const result = (await response.json()) as APIResponse<T>;

    return { status: response.status, response: response, data: result };
  }

  async download<T>(url: string) {
    const response = await fetch(this.BACKEND_URL + url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return { status: response.status, response: response };
  }
}

export const fetchService = new FetchService();
