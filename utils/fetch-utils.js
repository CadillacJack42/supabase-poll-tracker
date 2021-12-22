const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDAxOTY4MywiZXhwIjoxOTU1NTk1NjgzfQ.0WT-gqj-qvV0wYfg0QdblxbkS4J4rIq0wf8BI3R45yc';
const SUPABASE_URL = 'https://cmewyjgphfnmytfmmpjy.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export const signUp = async(email, password) => {
    const res = await client.auth.signUp({
        email,
        password,
    });
    return res.user;
};

export const signIn = async(email, password) => {
    const res = await client.auth.signIn({
        email,
        password,
    });
    return res.data;
};
