import React, { useState } from 'react'
import type { User } from './user.type';

const useCurrentUserStore = () => {
    const [user, setUser] = useState<User>();
    return {
        user,
        setUser
    };
}
export default useCurrentUserStore
