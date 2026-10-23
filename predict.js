export const predictCrop = (token, data) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "crop/predict/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(token ? { Authorization: `Token ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });


import useAccountStore from "@/store/useAccountStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getAuthHeaders = () => {
  const token = useAccountStore.getState().token;
  return token ? { Authorization: `Token ${token}` } : {};
};

/**
 * Predict crop disease from an image.
 * @param {File} imageFile
 * @returns {Promise<object>}
 */
export async function predictDisease(imageFile) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const res = await fetch(`${API_URL}disease-predict/`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      // NOTE: do NOT set Content-Type — the browser sets multipart boundary
    },
    body: formData,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Disease prediction failed.");
  }
  return data;
}

/**
 * Predict recommended fertilizer from soil/crop data.
 * @param {object} payload
 * @returns {Promise<object>}
 */

