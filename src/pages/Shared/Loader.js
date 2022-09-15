import React from 'react';

const Loader = () => {
    return (
        <div>
            <div class="border border-blue-300 shadow rounded-md p-4  w-full mx-auto">
                <div class="animate-pulse flex space-x-4 py-10 px-2 md:py-40 md:px-40">
                    <div class="rounded-full bg-slate-200 h-20 w-20"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-6 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-6 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-6 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-6 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;