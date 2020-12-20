export const PROFILE = '@@profile/PROFILE';

export const profile = (name, desc) => ({
   type: PROFILE,
   name,
   desc,
});
