import { type NextRequest, NextResponse } from "next/server";


const middleware = (req: NextRequest) => {
    const res = NextResponse.next();
    return res;
};

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};

export default middleware;