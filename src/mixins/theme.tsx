/**
 * CSS mixins that defines all the CSS theme variables for the web application.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { css } from "styled-components";

const themeCSS = css`
  :root {
    --rc-color-default-opacity: 1;

    /* Color system starts ==================================================== */

    // Use "rgba()" to render the desired color with the rgb values
    // I.e. rgba(var(--rc-color-slate-50), var(--rc-color-default-opacity))
    //
    // If the opacity value is 1, it's equivalent to the hex value.
    --rc-text-opacity: var(--rc-color-default-opacity);

    --rc-color-white: #ffffff;
    --rc-rgb-white: 255, 255, 255;

    --rc-color-black: #000000;
    --rc-rgb-black: 0, 0, 0;

    --rc-color-slate-50: #f8fafc;
    --rc-rgb-slate-50: 248, 250, 252;

    --rc-color-slate-100: #f1f5f9;
    --rc-rgb-slate-100: 241, 245, 249;

    --rc-color-slate-200: #e2e8f0;
    --rc-rgb-slate-200: 206, 232, 240;

    --rc-color-slate-300: #cbd5e1;
    --rc-rgb-slate-300: 203, 213, 205;

    --rc-color-slate-400: #94a3b8;
    --rc-rgb-slate-400: 148, 163, 184;

    --rc-color-slate-500: #64748b;
    --rc-rgb-slate-500: 100, 116, 139;

    --rc-color-slate-600: #475569;
    --rc-rgb-slate-600: 71, 85, 105;

    --rc-color-slate-700: #334155;
    --rc-rgb-slate-700: 51, 65, 85;

    --rc-color-slate-800: #1e293b;
    --rc-rgb-slate-800: 30, 41, 59;

    --rc-color-slate-900: #0f172a;
    --rc-rgb-slate-900: 15, 23, 42;

    --rc-color-gray-50: #f9fafb;
    --rc-rgb-gray-50: 249, 250, 251;

    --rc-color-gray-100: #f3f4f6;
    --rc-rgb-gray-100: 243, 244, 246;

    --rc-color-gray-200: #e5e7eb;
    --rc-rgb-gray-200: 209, 231, 235;

    --rc-color-gray-300: #d1d5db;
    --rc-rgb-gray-300: 209, 213, 219;

    --rc-color-gray-400: #9ca3af;
    --rc-rgb-gray-400: 156, 163, 175;

    --rc-color-gray-500: #6b7280;
    --rc-rgb-gray-500: 107, 114, 128;

    --rc-color-gray-600: #4b5563;
    --rc-rgb-gray-600: 75, 85, 99;

    --rc-color-gray-700: #374151;
    --rc-rgb-gray-700: 55, 65, 81;

    --rc-color-gray-800: #1f2937;
    --rc-rgb-gray-800: 31, 41, 55;

    --rc-color-gray-900: #111827;
    --rc-rgb-gray-900: 17, 24, 39;

    --rc-color-zinc-50: #fafafa;
    --rc-rgb-zinc-50: 250, 250, 250;

    --rc-color-zinc-100: #f4f4f5;
    --rc-rgb-zinc-100: 244, 244, 245;

    --rc-color-zinc-200: #e4e4e7;
    --rc-rgb-zinc-200: 228, 228, 231;

    --rc-color-zinc-300: #d4d4d8;
    --rc-rgb-zinc-300: 212, 212, 216;

    --rc-color-zinc-400: #a1a1aa;
    --rc-rgb-zinc-400: 161, 161, 170;

    --rc-color-zinc-500: #71717a;
    --rc-rgb-zinc-500: 113, 113, 122;

    --rc-color-zinc-600: #52525b;
    --rc-rgb-zinc-600: 82, 82, 91;

    --rc-color-zinc-700: #3f3f46;
    --rc-rgb-zinc-700: 63, 63, 70;

    --rc-color-zinc-800: #27272a;
    --rc-rgb-zinc-800: 39, 39, 42;

    --rc-color-zinc-900: #18181b;
    --rc-rgb-zinc-900: 24, 24, 27;

    --rc-color-neutral-50: #fafafa;
    --rc-rgb-neutral-50: 250, 250, 250;

    --rc-color-neutral-100: #f5f5f5;
    --rc-rgb-neutral-100: 245, 245, 245;

    --rc-color-neutral-200: #e7e5e4;
    --rc-rgb-neutral-200: 231, 229, 228;

    --rc-color-neutral-300: #d4d4d4;
    --rc-rgb-neutral-300: 212, 212, 212;

    --rc-color-neutral-400: #a3a3a3;
    --rc-rgb-neutral-400: 163, 163, 163;

    --rc-color-neutral-500: #737373;
    --rc-rgb-neutral-500: 115, 115, 115;

    --rc-color-neutral-600: #525252;
    --rc-rgb-neutral-600: 82, 82, 82;

    --rc-color-neutral-700: #404040;
    --rc-rgb-neutral-700: 64, 64, 64;

    --rc-color-neutral-800: #262626;
    --rc-rgb-neutral-800: 38, 38, 38;

    --rc-color-neutral-900: #171717;
    --rc-rgb-neutral-900: 23, 23, 23;

    --rc-color-stone-50: #fafaf9;
    --rc-rgb-stone-50: 250, 250, 249;

    --rc-color-stone-100: #f5f5f4;
    --rc-rgb-stone-100: 245, 245, 244;

    --rc-color-stone-200: #fed7aa;
    --rc-rgb-stone-200: 254, 215, 170;

    --rc-color-stone-300: #d6d3d1;
    --rc-rgb-stone-300: 214, 211, 209;

    --rc-color-stone-400: #a8a29e;
    --rc-rgb-stone-400: 168, 162, 158;

    --rc-color-stone-500: #78716c;
    --rc-rgb-stone-500: 120, 113, 108;

    --rc-color-stone-600: #57534e;
    --rc-rgb-stone-600: 87, 83, 78;

    --rc-color-stone-700: #44403c;
    --rc-rgb-stone-700: 68, 64, 60;

    --rc-color-stone-800: #27272a;
    --rc-rgb-stone-800: 39, 39, 42;

    --rc-color-stone-900: #1c1917;
    --rc-rgb-stone-900: 28, 25, 23;

    --rc-color-red-50: #fef2f2;
    --rc-rgb-red-50: 254, 242, 242;

    --rc-color-red-100: #fee2e2;
    --rc-rgb-red-100: 254, 226, 226;

    --rc-color-red-200: #fecaca;
    --rc-rgb-red-200: 254, 202, 202;

    --rc-color-red-300: #fca5a5;
    --rc-rgb-red-300: 252, 165, 165;

    --rc-color-red-400: #f87171;
    --rc-rgb-red-400: 248, 113, 113;

    --rc-color-red-500: #ef4444;
    --rc-rgb-red-500: 239, 68, 68;

    --rc-color-red-600: #dc2626;
    --rc-rgb-red-600: 220, 38, 38;

    --rc-color-red-700: #b91c1c;
    --rc-rgb-red-700: 185, 28, 28;

    --rc-color-red-800: #991b1b;
    --rc-rgb-red-800: 153, 27, 27;

    --rc-color-red-900: #7f1d1d;
    --rc-rgb-red-900: 127, 29, 29;

    --rc-color-orange-50: #fff7ed;
    --rc-rgb-orange-50: 255, 247, 237;

    --rc-color-orange-100: #ffedd5;
    --rc-rgb-orange-100: 255, 237, 213;

    --rc-color-orange-200: #fed7aa;
    --rc-rgb-orange-200: 254, 215, 170;

    --rc-color-orange-300: #fdba74;
    --rc-rgb-orange-300: 253, 186, 116;

    --rc-color-orange-400: #fb923c;
    --rc-rgb-orange-400: 251, 146, 60;

    --rc-color-orange-500: #f97316;
    --rc-rgb-orange-500: 249, 115, 22;

    --rc-color-orange-600: #ea580c;
    --rc-rgb-orange-600: 234, 88, 12;

    --rc-color-orange-700: #c2410c;
    --rc-rgb-orange-700: 194, 65, 12;

    --rc-color-orange-800: #9a3412;
    --rc-rgb-orange-800: 154, 52, 18;

    --rc-color-orange-900: #7c2d12;
    --rc-rgb-orange-900: 124, 45, 18;

    --rc-color-amber-50: #fffbeb;
    --rc-rgb-amber-50: 255, 251, 235;

    --rc-color-amber-100: #fef3c7;
    --rc-rgb-amber-100: 254, 243, 199;

    --rc-color-amber-200: #fde68a;
    --rc-rgb-amber-200: 253, 230, 138;

    --rc-color-amber-300: #fcd34d;
    --rc-rgb-amber-300: 252, 211, 77;

    --rc-color-amber-400: #facc15;
    --rc-rgb-amber-400: 250, 204, 21;

    --rc-color-amber-500: #f59e0b;
    --rc-rgb-amber-500: 245, 158, 11;

    --rc-color-amber-600: #d97706;
    --rc-rgb-amber-600: 217, 119, 6;

    --rc-color-amber-700: #b45309;
    --rc-rgb-amber-700: 180, 83, 9;

    --rc-color-amber-800: #92400e;
    --rc-rgb-amber-800: 146, 64, 14;

    --rc-color-amber-900: #78350f;
    --rc-rgb-amber-900: 120, 53, 15;

    --rc-color-yellow-50: #fefce8;
    --rc-rgb-yellow-50: 254, 252, 232;

    --rc-color-yellow-100: #fef9c3;
    --rc-rgb-yellow-100: 254, 249, 195;

    --rc-color-yellow-200: #fef08a;
    --rc-rgb-yellow-200: 254, 240, 138;

    --rc-color-yellow-300: #fde047;
    --rc-rgb-yellow-300: 253, 224, 71;

    --rc-color-yellow-400: #facc15;
    --rc-rgb-yellow-400: 250, 204, 21;

    --rc-color-yellow-500: #eab308;
    --rc-rgb-yellow-500: 234, 179, 8;

    --rc-color-yellow-600: #ca8a04;
    --rc-rgb-yellow-600: 202, 138, 4;

    --rc-color-yellow-700: #a16207;
    --rc-rgb-yellow-700: 161, 98, 7;

    --rc-color-yellow-800: #854d0e;
    --rc-rgb-yellow-800: 133, 77, 14;

    --rc-color-yellow-900: #713f12;
    --rc-rgb-yellow-900: 113, 63, 18;

    --rc-color-lime-50: #f7fee7;
    --rc-rgb-lime-50: 247, 254, 231;

    --rc-color-lime-100: #ecfccb;
    --rc-rgb-lime-100: 236, 252, 203;

    --rc-color-lime-200: #d9f99d;
    --rc-rgb-lime-200: 217, 249, 157;

    --rc-color-lime-300: #bef264;
    --rc-rgb-lime-300: 190, 242, 100;

    --rc-color-lime-400: #a3e635;
    --rc-rgb-lime-400: 163, 230, 53;

    --rc-color-lime-500: #84cc16;
    --rc-rgb-lime-500: 132, 204, 22;

    --rc-color-lime-600: #65a30d;
    --rc-rgb-lime-600: 101, 163, 13;

    --rc-color-lime-700: #4d7c0f;
    --rc-rgb-lime-700: 77, 124, 15;

    --rc-color-lime-800: #3f6212;
    --rc-rgb-lime-800: 63, 98, 18;

    --rc-color-lime-900: #365314;
    --rc-rgb-lime-900: 54, 83, 20;

    --rc-color-green-50: #f0fdf4;
    --rc-rgb-green-50: 240, 253, 244;

    --rc-color-green-100: #dcfce7;
    --rc-rgb-green-100: 220, 252, 231;

    --rc-color-green-200: #bbf7d0;
    --rc-rgb-green-200: 187, 247, 208;

    --rc-color-green-300: #86efac;
    --rc-rgb-green-300: 134, 239, 172;

    --rc-color-green-400: #4ade80;
    --rc-rgb-green-400: 74, 222, 128;

    --rc-color-green-500: #22c55e;
    --rc-rgb-green-500: 34, 197, 94;

    --rc-color-green-600: #16a34a;
    --rc-rgb-green-600: 22, 163, 74;

    --rc-color-green-700: #15803d;
    --rc-rgb-green-700: 21, 128, 61;

    --rc-color-green-800: #166534;
    --rc-rgb-green-800: 22, 101, 52;

    --rc-color-green-900: #14532d;
    --rc-rgb-green-900: 20, 83, 45;

    --rc-color-emerald-50: #ecfdf5;
    --rc-rgb-emerald-50: 236, 253, 245;

    --rc-color-emerald-100: #d1fae5;
    --rc-rgb-emerald-100: 209, 250, 229;

    --rc-color-emerald-200: #a7f3d0;
    --rc-rgb-emerald-200: 167, 243, 208;

    --rc-color-emerald-300: #6ee7b7;
    --rc-rgb-emerald-300: 110, 231, 183;

    --rc-color-emerald-400: #34d399;
    --rc-rgb-emerald-400: 52, 211, 153;

    --rc-color-emerald-500: #10b981;
    --rc-rgb-emerald-500: 16, 185, 129;

    --rc-color-emerald-600: #059669;
    --rc-rgb-emerald-600: 5, 150, 105;

    --rc-color-emerald-700: #047857;
    --rc-rgb-emerald-700: 4, 120, 87;

    --rc-color-emerald-800: #065f46;
    --rc-rgb-emerald-800: 6, 95, 70;

    --rc-color-emerald-900: #064e3b;
    --rc-rgb-emerald-900: 6, 78, 59;

    --rc-color-teal-50: #f0fdfa;
    --rc-rgb-teal-50: 240, 253, 250;

    --rc-color-teal-100: #ccfbf1;
    --rc-rgb-teal-100: 204, 251, 241;

    --rc-color-teal-200: #99f6e4;
    --rc-rgb-teal-200: 153, 246, 228;

    --rc-color-teal-300: #5eead4;
    --rc-rgb-teal-300: 94, 234, 212;

    --rc-color-teal-400: #2dd4bf;
    --rc-rgb-teal-400: 45, 212, 191;

    --rc-color-teal-500: #14b8a6;
    --rc-rgb-teal-500: 20, 184, 166;

    --rc-color-teal-600: #0d9488;
    --rc-rgb-teal-600: 13, 148, 136;

    --rc-color-teal-700: #0f766e;
    --rc-rgb-teal-700: 15, 118, 110;

    --rc-color-teal-800: #115e59;
    --rc-rgb-teal-800: 17, 94, 89;

    --rc-color-teal-900: #134e4a;
    --rc-rgb-teal-900: 19, 78, 74;

    --rc-color-cyan-50: #ecfeff;
    --rc-rgb-cyan-50: 236, 254, 255;

    --rc-color-cyan-100: #cffafe;
    --rc-rgb-cyan-100: 207, 250, 254;

    --rc-color-cyan-200: #a5f3fc;
    --rc-rgb-cyan-200: 165, 243, 252;

    --rc-color-cyan-300: #67e8f9;
    --rc-rgb-cyan-300: 103, 232, 249;

    --rc-color-cyan-400: #22d3ee;
    --rc-rgb-cyan-400: 34, 211, 238;

    --rc-color-cyan-500: #06b6d4;
    --rc-rgb-cyan-500: 6, 182, 212;

    --rc-color-cyan-600: #0891b2;
    --rc-rgb-cyan-600: 8, 145, 178;

    --rc-color-cyan-700: #0e7490;
    --rc-rgb-cyan-700: 14, 116, 144;

    --rc-color-cyan-800: #155e75;
    --rc-rgb-cyan-800: 21, 94, 117;

    --rc-color-cyan-900: #164e63;
    --rc-rgb-cyan-900: 22, 78, 99;

    --rc-color-sky-50: #f0f9ff;
    --rc-rgb-sky-50: 240, 249, 255;

    --rc-color-sky-100: #e0f2fe;
    --rc-rgb-sky-100: 224, 242, 254;

    --rc-color-sky-200: #bae6fd;
    --rc-rgb-sky-200: 186, 230, 253;

    --rc-color-sky-300: #7dd3fc;
    --rc-rgb-sky-300: 125, 211, 252;

    --rc-color-sky-400: #38bdf8;
    --rc-rgb-sky-400: 56, 189, 248;

    --rc-color-sky-500: #0ea5e9;
    --rc-rgb-sky-500: 14, 165, 233;

    --rc-color-sky-600: #0284c7;
    --rc-rgb-sky-600: 2, 132, 199;

    --rc-color-sky-700: #0369a1;
    --rc-rgb-sky-700: 3, 105, 161;

    --rc-color-sky-800: #075985;
    --rc-rgb-sky-800: 7, 89, 133;

    --rc-color-sky-900: #0c4a6e;
    --rc-rgb-sky-900: 12, 74, 110;

    --rc-color-blue-50: #eff6ff;
    --rc-rgb-blue-50: 239, 246, 255;

    --rc-color-blue-100: #dbeafe;
    --rc-rgb-blue-100: 219, 234, 254;

    --rc-color-blue-200: #bfdbfe;
    --rc-rgb-blue-200: 191, 219, 254;

    --rc-color-blue-300: #93c5fd;
    --rc-rgb-blue-300: 147, 197, 253;

    --rc-color-blue-400: #60a5fa;
    --rc-rgb-blue-400: 96, 165, 250;

    --rc-color-blue-500: #3b82f6;
    --rc-rgb-blue-500: 59, 130, 246;

    --rc-color-blue-600: #2563eb;
    --rc-rgb-blue-600: 37, 99, 235;

    --rc-color-blue-700: #1d4ed8;
    --rc-rgb-blue-700: 29, 78, 216;

    --rc-color-blue-800: #1e40af;
    --rc-rgb-blue-800: 30, 64, 175;

    --rc-color-blue-900: #1e3a8a;
    --rc-rgb-blue-900: 30, 58, 138;

    --rc-color-indigo-50: #eef2ff;
    --rc-rgb-indigo-50: 238, 242, 255;

    --rc-color-indigo-100: #e0e7ff;
    --rc-rgb-indigo-100: 224, 231, 255;

    --rc-color-indigo-200: #c7d2fe;
    --rc-rgb-indigo-200: 199, 210, 254;

    --rc-color-indigo-300: #a5b4fc;
    --rc-rgb-indigo-300: 165, 180, 252;

    --rc-color-indigo-400: #818cf8;
    --rc-rgb-indigo-400: 129, 140, 248;

    --rc-color-indigo-500: #6366f1;
    --rc-rgb-indigo-500: 99, 102, 241;

    --rc-color-indigo-600: #4f46e5;
    --rc-rgb-indigo-600: 79, 70, 229;

    --rc-color-indigo-700: #4338ca;
    --rc-rgb-indigo-700: 67, 56, 202;

    --rc-color-indigo-800: #3730a3;
    --rc-rgb-indigo-800: 55, 48, 163;

    --rc-color-indigo-900: #312e81;
    --rc-rgb-indigo-900: 49, 46, 129;

    --rc-color-violet-50: #f5f3ff;
    --rc-rgb-violet-50: 245, 243, 255;

    --rc-color-violet-100: #ede9fe;
    --rc-rgb-violet-100: 237, 233, 254;

    --rc-color-violet-200: #ddd6fe;
    --rc-rgb-violet-200: 221, 214, 254;

    --rc-color-violet-300: #c4b5fd;
    --rc-rgb-violet-300: 196, 181, 253;

    --rc-color-violet-400: #a78bfa;
    --rc-rgb-violet-400: 167, 139, 250;

    --rc-color-violet-500: #8b5cf6;
    --rc-rgb-violet-500: 139, 92, 246;

    --rc-color-violet-600: #7c3aed;
    --rc-rgb-violet-600: 124, 58, 237;

    --rc-color-violet-700: #6d28d9;
    --rc-rgb-violet-700: 109, 40, 217;

    --rc-color-violet-800: #5b21b6;
    --rc-rgb-violet-800: 91, 33, 182;

    --rc-color-violet-900: #4c1d95;
    --rc-rgb-violet-900: 76, 29, 149;

    --rc-color-purple-50: #faf5ff;
    --rc-rgb-purple-50: 250, 245, 255;

    --rc-color-purple-100: #f3e8ff;
    --rc-rgb-purple-100: 243, 232, 255;

    --rc-color-purple-200: #e9d5ff;
    --rc-rgb-purple-200: 233, 213, 255;

    --rc-color-purple-300: #d8b4fe;
    --rc-rgb-purple-300: 216, 180, 254;

    --rc-color-purple-400: #c084fc;
    --rc-rgb-purple-400: 192, 132, 252;

    --rc-color-purple-500: #a855f7;
    --rc-rgb-purple-500: 168, 85, 247;

    --rc-color-purple-600: #9333ea;
    --rc-rgb-purple-600: 147, 51, 234;

    --rc-color-purple-700: #7e22ce;
    --rc-rgb-purple-700: 126, 34, 206;

    --rc-color-purple-800: #6b21a8;
    --rc-rgb-purple-800: 107, 33, 168;

    --rc-color-purple-900: #581c87;
    --rc-rgb-purple-900: 88, 28, 135;

    --rc-color-fuchsia-50: #fdf4ff;
    --rc-rgb-fuchsia-50: 253, 244, 255;

    --rc-color-fuchsia-100: #fae8ff;
    --rc-rgb-fuchsia-100: 250, 232, 255;

    --rc-color-fuchsia-200: #f5d0fe;
    --rc-rgb-fuchsia-200: 245, 208, 254;

    --rc-color-fuchsia-300: #f0abfc;
    --rc-rgb-fuchsia-300: 240, 171, 252;

    --rc-color-fuchsia-400: #e879f9;
    --rc-rgb-fuchsia-400: 232, 121, 249;

    --rc-color-fuchsia-500: #d946ef;
    --rc-rgb-fuchsia-500: 217, 70, 239;

    --rc-color-fuchsia-600: #c026d3;
    --rc-rgb-fuchsia-600: 192, 38, 211;

    --rc-color-fuchsia-700: #a21caf;
    --rc-rgb-fuchsia-700: 162, 28, 175;

    --rc-color-fuchsia-800: #86198f;
    --rc-rgb-fuchsia-800: 134, 25, 143;

    --rc-color-fuchsia-900: #701a75;
    --rc-rgb-fuchsia-900: 112, 26, 117;

    --rc-color-pink-50: #fdf2f8;
    --rc-rgb-pink-50: 253, 242, 248;

    --rc-color-pink-100: #fce7f3;
    --rc-rgb-pink-100: 252, 231, 243;

    --rc-color-pink-200: #fbcfe8;
    --rc-rgb-pink-200: 251, 207, 232;

    --rc-color-pink-300: #f9a8d4;
    --rc-rgb-pink-300: 249, 168, 212;

    --rc-color-pink-400: #f472b6;
    --rc-rgb-pink-400: 244, 114, 182;

    --rc-color-pink-500: #ec4899;
    --rc-rgb-pink-500: 236, 72, 153;

    --rc-color-pink-600: #db2777;
    --rc-rgb-pink-600: 219, 39, 119;

    --rc-color-pink-700: #be185d;
    --rc-rgb-pink-700: 190, 24, 93;

    --rc-color-pink-800: #9d174d;
    --rc-rgb-pink-800: 157, 23, 77;

    --rc-color-pink-900: #831843;
    --rc-rgb-pink-900: 131, 24, 67;

    --rc-color-rose-50: #fff1f2;
    --rc-rgb-rose-50: 255, 241, 242;

    --rc-color-rose-100: #ffe4e6;
    --rc-rgb-rose-100: 255, 228, 230;

    --rc-color-rose-200: #fecdd3;
    --rc-rgb-rose-200: 254, 205, 211;

    --rc-color-rose-300: #fda4af;
    --rc-rgb-rose-300: 253, 164, 175;

    --rc-color-rose-400: #fb7185;
    --rc-rgb-rose-400: 251, 113, 133;

    --rc-color-rose-500: #f43f5e;
    --rc-rgb-rose-500: 244, 63, 94;

    --rc-color-rose-600: #e11d48;
    --rc-rgb-rose-600: 225, 29, 72;

    --rc-color-rose-700: #be123c;
    --rc-rgb-rose-700: 190, 18, 60;

    --rc-color-rose-800: #9f1239;
    --rc-rgb-rose-800: 159, 18, 57;

    --rc-color-rose-900: #881337;
    --rc-rgb-rose-900: 136, 19, 55;
    /* Color system ends ====================================================== */
  }
`;

export default themeCSS;
