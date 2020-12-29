export const CHANGE_PROFILE = '@@profile/PROFILE';

export const change_profile = (name, desc) => ({
   type: change_profile,
   name,
   desc,
});
