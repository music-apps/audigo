export const initialState = {
    playing: false,
    paused: false,
    position: 0,
    duration: null,
    id: null,
    volume: 100
};

export const initialClipState = {
    position: 0,
    duration: null
};

export const getState = (state = initialState) => state;

export const getId = (state = initialState) => state.id;

export const getCommand = (state = initialState) => state.command;

export const getClip = (state = initialState, clip) => state[clip] || initialClipState;

export const getPlayingClip = (state = initialState) => state[state.id] || initialClipState;
