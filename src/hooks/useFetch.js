import { useEffect, useReducer } from "react";

const useFetch = (url, options) => {
	const initialState = {
		error: undefined,
		data: undefined,
	};
	const fetchReducer = (state, action) => {
		switch (action.type) {
			case "loading":
				return { ...initialState };
			case "fetched":
				return { ...initialState, data: action.payload };
			case "error":
				return { ...initialState, error: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: "loading" });
			try {
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				dispatch({ type: "fetched", payload: data });
			} catch (error) {
				dispatch({ type: "error", payload: error });
			}
		};

		fetchData();
	}, [url, options]);

	return state;
};

export default useFetch;
