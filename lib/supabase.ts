// Placeholder for Supabase client
// We'll use local storage for auth state in static export
export const supabase = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      // Simulate auth for static export
      return { error: null };
    },
    signUp: async ({ email, password, options }: { email: string; password: string; options?: any }) => {
      // Simulate auth for static export
      return { error: null };
    },
    signOut: async () => {
      // Simulate auth for static export
      return { error: null };
    },
    getSession: async () => {
      // Simulate auth for static export
      return { data: { session: null } };
    },
    onAuthStateChange: () => {
      // Simulate auth for static export
      return {
        data: {
          subscription: {
            unsubscribe: () => {},
          },
        },
      };
    },
  },
};