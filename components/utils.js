export const getImageUrl = (id, type = 'album') => process.env.NODE_ENV === 'development' ? `/img/${type}/default.png` : `https://beta.sittingonclouds.net/live/${type}/${id}.png`
