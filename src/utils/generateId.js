export const generateId = () => {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).slice(2, 11);
    return `${timestamp}-${randomString}`;
};
