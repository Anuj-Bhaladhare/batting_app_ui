// import logger from '../../utils/logger'
export const INITIAL_STATE = {
  accessToken: sessionStorage.getItem("login"),
  // client_id: +sessionStorage.getItem("kc_client_id"),
  // client_location_id: sessionStorage.getItem("kc_location_id"),
  // client_branch_id: sessionStorage.getItem("kc_branch_id"),
  // domain_id: sessionStorage.getItem("kc_domain_id"),
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "SET_OBJECT":
      return {
        ...state,
        ...payload,
      };

    case "APPEND_LIST": {
      const { name, data } = payload;
      return {
        ...state,
        [name]: [...new Set([...(state[name] || []), ...data])],
      };
    }

    case "APPEND_OBJECT_TO_LIST": {
      const { name, data } = payload;
      return {
        ...state,
        [name]: [...new Set([...(state[name] || []), data])],
      };
    }

    case "APPEND_OBJECT": {
      const { name, data } = payload;
      return {
        ...state,
        [name]: { ...(state[name] || {}), ...Object.assign(...data) },
      };
    }

    default:
      return state;
  }
};
