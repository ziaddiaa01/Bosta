import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrackingState {
  trackingDetails: any | null;
  error: string | null;
}

const initialState: TrackingState = {
  trackingDetails: null,
  error: null,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    setTrackingDetails: (state, action: PayloadAction<any>) => {
      state.trackingDetails = action.payload;
      state.error = null;
    },
    setTrackingDetailsError: (state, action: PayloadAction<string>) => {
      state.trackingDetails = null;
      state.error = action.payload;
    },
    clearTrackingDetails: (state) => {
      state.trackingDetails = null;
      state.error = null;
    },
  },
});

export const { setTrackingDetails, setTrackingDetailsError, clearTrackingDetails } =
  trackingSlice.actions;

export default trackingSlice.reducer;
