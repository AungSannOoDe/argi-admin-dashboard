```javascript
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all crops
export const getCrops = async () => {
  const response = await axios.get(`${API_URL}/api/crops/`);
  return response.data;
};

// Get a single crop by ID
export const getCropById = async (id) => {
  const response = await axios.get(`${API_URL}/api/crops/${id}/`);
  return response.data;
};

// Search crops
export const searchCrops = async (query) => {
  const response = await axios.get(`${API_URL}/api/crops/`, {
    params: {
      search: query,
    },
  });

  return response.data;
};

// Create crop
export const createCrop = async (cropData, token) => {
  const response = await axios.post(
    `${API_URL}/api/crops/`,
    cropData,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return response.data;
};

// Update crop
export const updateCrop = async (id, cropData, token) => {
  const response = await axios.put(
    `${API_URL}/api/crops/${id}/`,
    cropData,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return response.data;
};

// Delete crop
export const deleteCrop = async (id, token) => {
  const response = await axios.delete(
    `${API_URL}/api/crops/${id}/`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return response.data;
};

// Crop prediction
export const predictCrop = async (inputData, token) => {
  const response = await axios.post(
    `${API_URL}/api/crop-prediction/`,
    inputData,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return response.data;
};
```
