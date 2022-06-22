/**
 * React component for display path icon svg
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import styled from "styled-components";

const PathCSS = styled.svg`
  .st0 {
    fill: none;
    stroke: #007aff;
    stroke-width: 1.5;
  }
  .st1 {
    fill: #007aff;
  }
  .st2 {
    fill: #00c7be;
  }
  .st3 {
    fill: #00c7bd;
  }
  .st4 {
    fill: #01c7bc;
  }
  .st5 {
    fill: #01c7bb;
  }
  .st6 {
    fill: #02c7ba;
  }
  .st7 {
    fill: #02c7b9;
  }
  .st8 {
    fill: #02c7b8;
  }
  .st9 {
    fill: #03c7b7;
  }
  .st10 {
    fill: #03c7b6;
  }
  .st11 {
    fill: #04c7b5;
  }
  .st12 {
    fill: #04c7b4;
  }
  .st13 {
    fill: #04c7b3;
  }
  .st14 {
    fill: #05c7b2;
  }
  .st15 {
    fill: #05c7b1;
  }
  .st16 {
    fill: #06c7b0;
  }
  .st17 {
    fill: #06c7af;
  }
  .st18 {
    fill: #06c7ae;
  }
  .st19 {
    fill: #07c7ad;
  }
  .st20 {
    fill: #07c7ac;
  }
  .st21 {
    fill: #08c7ab;
  }
  .st22 {
    fill: #08c7aa;
  }
  .st23 {
    fill: #08c7a9;
  }
  .st24 {
    fill: #09c7a8;
  }
  .st25 {
    fill: #09c7a7;
  }
  .st26 {
    fill: #0ac7a6;
  }
  .st27 {
    fill: #0ac7a5;
  }
  .st28 {
    fill: #0ac7a4;
  }
  .st29 {
    fill: #0bc7a3;
  }
  .st30 {
    fill: #0bc7a2;
  }
  .st31 {
    fill: #0cc7a1;
  }
  .st32 {
    fill: #0cc7a0;
  }
  .st33 {
    fill: #0cc79f;
  }
  .st34 {
    fill: #0dc79e;
  }
  .st35 {
    fill: #0dc79d;
  }
  .st36 {
    fill: #0dc79c;
  }
  .st37 {
    fill: #0ec79b;
  }
  .st38 {
    fill: #0ec79a;
  }
  .st39 {
    fill: #0fc799;
  }
  .st40 {
    fill: #0fc798;
  }
  .st41 {
    fill: #0fc797;
  }
  .st42 {
    fill: #10c796;
  }
  .st43 {
    fill: #10c795;
  }
  .st44 {
    fill: #11c794;
  }
  .st45 {
    fill: #11c793;
  }
  .st46 {
    fill: #11c792;
  }
  .st47 {
    fill: #12c791;
  }
  .st48 {
    fill: #12c790;
  }
  .st49 {
    fill: #13c78f;
  }
  .st50 {
    fill: #13c78e;
  }
  .st51 {
    fill: #13c78d;
  }
  .st52 {
    fill: #14c78c;
  }
  .st53 {
    fill: #14c78b;
  }
  .st54 {
    fill: #15c78a;
  }
  .st55 {
    fill: #15c789;
  }
  .st56 {
    fill: #15c788;
  }
  .st57 {
    fill: #16c787;
  }
  .st58 {
    fill: #16c786;
  }
  .st59 {
    fill: #17c785;
  }
  .st60 {
    fill: #17c784;
  }
  .st61 {
    fill: #17c783;
  }
  .st62 {
    fill: #18c782;
  }
  .st63 {
    fill: #18c781;
  }
  .st64 {
    fill: #19c780;
  }
  .st65 {
    fill: #19c77f;
  }
  .st66 {
    fill: #19c77e;
  }
  .st67 {
    fill: #1ac77d;
  }
  .st68 {
    fill: #1ac77c;
  }
  .st69 {
    fill: #1bc77b;
  }
  .st70 {
    fill: #1bc77a;
  }
  .st71 {
    fill: #1bc779;
  }
  .st72 {
    fill: #1cc778;
  }
  .st73 {
    fill: #1cc777;
  }
  .st74 {
    fill: #1dc776;
  }
  .st75 {
    fill: #1dc775;
  }
  .st76 {
    fill: #1dc774;
  }
  .st77 {
    fill: #1ec773;
  }
  .st78 {
    fill: #1ec772;
  }
  .st79 {
    fill: #1fc771;
  }
  .st80 {
    fill: #1fc770;
  }
  .st81 {
    fill: #1fc76f;
  }
  .st82 {
    fill: #20c76e;
  }
  .st83 {
    fill: #20c76d;
  }
  .st84 {
    fill: #21c76c;
  }
  .st85 {
    fill: #21c76b;
  }
  .st86 {
    fill: #21c76a;
  }
  .st87 {
    fill: #22c769;
  }
  .st88 {
    fill: #22c768;
  }
  .st89 {
    fill: #23c767;
  }
  .st90 {
    fill: #23c766;
  }
  .st91 {
    fill: #23c765;
  }
  .st92 {
    fill: #24c764;
  }
  .st93 {
    fill: #24c763;
  }
  .st94 {
    fill: #25c762;
  }
  .st95 {
    fill: #25c761;
  }
  .st96 {
    fill: #25c760;
  }
  .st97 {
    fill: #26c75f;
  }
  .st98 {
    fill: #26c75e;
  }
  .st99 {
    fill: #27c75d;
  }
  .st100 {
    fill: #27c75c;
  }
  .st101 {
    fill: #27c75b;
  }
  .st102 {
    fill: #28c75a;
  }
  .st103 {
    fill: #28c759;
  }
  .st104 {
    fill: #28c758;
  }
  .st105 {
    fill: #29c757;
  }
  .st106 {
    fill: #29c756;
  }
  .st107 {
    fill: #2ac755;
  }
  .st108 {
    fill: #2ac754;
  }
  .st109 {
    fill: #2ac753;
  }
  .st110 {
    fill: #2bc752;
  }
  .st111 {
    fill: #2bc751;
  }
  .st112 {
    fill: #2cc750;
  }
  .st113 {
    fill: #2cc74f;
  }
  .st114 {
    fill: #2cc74e;
  }
  .st115 {
    fill: #2dc74d;
  }
  .st116 {
    fill: #2dc74c;
  }
  .st117 {
    fill: #2ec74b;
  }
  .st118 {
    fill: #2ec74a;
  }
  .st119 {
    fill: #2ec749;
  }
  .st120 {
    fill: #2fc748;
  }
  .st121 {
    fill: #2fc747;
  }
  .st122 {
    fill: #30c746;
  }
  .st123 {
    fill: #30c745;
  }
  .st124 {
    fill: #30c744;
  }
  .st125 {
    fill: #31c743;
  }
  .st126 {
    fill: #31c742;
  }
  .st127 {
    fill: #32c741;
  }
  .st128 {
    fill: #32c740;
  }
  .st129 {
    fill: #32c73f;
  }
  .st130 {
    fill: #33c73e;
  }
  .st131 {
    fill: #33c73d;
  }
  .st132 {
    fill: #34c73c;
  }
  .st133 {
    fill: #34c73b;
  }
  .st134 {
    fill: #34c73b;
    stroke: #ffffff;
  }
  .st135 {
    fill: #007bfe;
  }
  .st136 {
    fill: #007cfd;
  }
  .st137 {
    fill: #007dfc;
  }
  .st138 {
    fill: #007efc;
  }
  .st139 {
    fill: #007ffb;
  }
  .st140 {
    fill: #0080fa;
  }
  .st141 {
    fill: #0081f9;
  }
  .st142 {
    fill: #0082f8;
  }
  .st143 {
    fill: #0083f7;
  }
  .st144 {
    fill: #0084f7;
  }
  .st145 {
    fill: #0085f6;
  }
  .st146 {
    fill: #0086f5;
  }
  .st147 {
    fill: #0087f4;
  }
  .st148 {
    fill: #0088f3;
  }
  .st149 {
    fill: #0089f2;
  }
  .st150 {
    fill: #008af2;
  }
  .st151 {
    fill: #008bf1;
  }
  .st152 {
    fill: #008cf0;
  }
  .st153 {
    fill: #008def;
  }
  .st154 {
    fill: #008eee;
  }
  .st155 {
    fill: #008fed;
  }
  .st156 {
    fill: #0090ed;
  }
  .st157 {
    fill: #0091ec;
  }
  .st158 {
    fill: #0092eb;
  }
  .st159 {
    fill: #0093ea;
  }
  .st160 {
    fill: #0094e9;
  }
  .st161 {
    fill: #0095e8;
  }
  .st162 {
    fill: #0096e8;
  }
  .st163 {
    fill: #0097e7;
  }
  .st164 {
    fill: #0098e6;
  }
  .st165 {
    fill: #0099e5;
  }
  .st166 {
    fill: #009ae4;
  }
  .st167 {
    fill: #009be3;
  }
  .st168 {
    fill: #009ce3;
  }
  .st169 {
    fill: #009de2;
  }
  .st170 {
    fill: #009ee1;
  }
  .st171 {
    fill: #009fe0;
  }
  .st172 {
    fill: #00a0df;
  }
  .st173 {
    fill: #00a1de;
  }
  .st174 {
    fill: #00a2dd;
  }
  .st175 {
    fill: #00a3dc;
  }
  .st176 {
    fill: #00a4db;
  }
  .st177 {
    fill: #00a5da;
  }
  .st178 {
    fill: #00a6da;
  }
  .st179 {
    fill: #00a7d9;
  }
  .st180 {
    fill: #00a8d8;
  }
  .st181 {
    fill: #00a9d7;
  }
  .st182 {
    fill: #00aad6;
  }
  .st183 {
    fill: #00abd5;
  }
  .st184 {
    fill: #00acd5;
  }
  .st185 {
    fill: #00add4;
  }
  .st186 {
    fill: #00aed3;
  }
  .st187 {
    fill: #00afd2;
  }
  .st188 {
    fill: #00b0d1;
  }
  .st189 {
    fill: #00b1d0;
  }
  .st190 {
    fill: #00b2d0;
  }
  .st191 {
    fill: #00b3cf;
  }
  .st192 {
    fill: #00b4ce;
  }
  .st193 {
    fill: #00b5cd;
  }
  .st194 {
    fill: #00b6cc;
  }
  .st195 {
    fill: #00b7cb;
  }
  .st196 {
    fill: #00b8cb;
  }
  .st197 {
    fill: #00b9ca;
  }
  .st198 {
    fill: #00bac9;
  }
  .st199 {
    fill: #00bbc8;
  }
  .st200 {
    fill: #00bcc7;
  }
  .st201 {
    fill: #00bdc6;
  }
  .st202 {
    fill: #00bec6;
  }
  .st203 {
    fill: #00bfc5;
  }
  .st204 {
    fill: #00c0c4;
  }
  .st205 {
    fill: #00c1c3;
  }
  .st206 {
    fill: #00c2c2;
  }
  .st207 {
    fill: #00c3c1;
  }
  .st208 {
    fill: #00c4c1;
  }
  .st209 {
    fill: #00c5c0;
  }
  .st210 {
    fill: #00c6bf;
  }
`;

const Path = () => {
  return (
    <PathCSS
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      xmlSpace="preserve"
    >
      <style type="text/css"></style>
      <path className="st0" d="M13,18.2l2.8,2.8L13,23.8" />
      <circle className="st1" cx="21" cy="21" r="3" />
      <g>
        <circle className="st2" cx="12" cy="15" r="0.8" />
        <circle className="st3" cx="12.2" cy="15" r="0.8" />
        <circle className="st4" cx="12.4" cy="15" r="0.8" />
        <circle className="st5" cx="12.6" cy="15" r="0.8" />
        <circle className="st6" cx="12.8" cy="15" r="0.8" />
        <circle className="st7" cx="13" cy="15" r="0.8" />
        <circle className="st8" cx="13.2" cy="15" r="0.8" />
        <circle className="st9" cx="13.4" cy="15" r="0.8" />
        <circle className="st10" cx="13.6" cy="15" r="0.8" />
        <circle className="st11" cx="13.9" cy="15" r="0.8" />
        <circle className="st12" cx="14.1" cy="15" r="0.8" />
        <circle className="st13" cx="14.3" cy="15" r="0.8" />
        <circle className="st14" cx="14.5" cy="15" r="0.8" />
        <circle className="st15" cx="14.7" cy="15" r="0.8" />
        <circle className="st16" cx="14.9" cy="15" r="0.8" />
        <circle className="st17" cx="15.1" cy="15" r="0.8" />
        <circle className="st18" cx="15.3" cy="15" r="0.8" />
        <circle className="st19" cx="15.5" cy="15" r="0.8" />
        <circle className="st20" cx="15.7" cy="15" r="0.8" />
        <circle className="st21" cx="15.9" cy="15" r="0.8" />
        <circle className="st22" cx="16.1" cy="15" r="0.8" />
        <circle className="st23" cx="16.3" cy="15" r="0.8" />
        <circle className="st24" cx="16.5" cy="15" r="0.8" />
        <circle className="st25" cx="16.7" cy="15" r="0.8" />
        <circle className="st26" cx="16.9" cy="15" r="0.8" />
        <circle className="st27" cx="17.1" cy="15" r="0.8" />
        <circle className="st28" cx="17.4" cy="15" r="0.8" />
        <circle className="st29" cx="17.6" cy="15" r="0.8" />
        <circle className="st30" cx="17.8" cy="15" r="0.8" />
        <circle className="st31" cx="18" cy="15" r="0.8" />
        <circle className="st32" cx="18.2" cy="15" r="0.8" />
        <circle className="st33" cx="18.4" cy="15" r="0.8" />
        <circle className="st34" cx="18.6" cy="15" r="0.8" />
        <circle className="st35" cx="18.8" cy="15" r="0.8" />
        <circle className="st36" cx="19" cy="15" r="0.8" />
        <circle className="st37" cx="19.2" cy="15" r="0.8" />
        <circle className="st38" cx="19.4" cy="15" r="0.8" />
        <circle className="st39" cx="19.6" cy="15" r="0.8" />
        <circle className="st40" cx="19.8" cy="15" r="0.8" />
        <circle className="st41" cx="20" cy="15" r="0.8" />
        <circle className="st42" cx="20.2" cy="15" r="0.8" />
        <circle className="st43" cx="20.5" cy="15" r="0.8" />
        <circle className="st44" cx="20.7" cy="14.9" r="0.8" />
        <circle className="st45" cx="20.9" cy="14.9" r="0.8" />
        <circle className="st46" cx="21.1" cy="14.8" r="0.8" />
        <circle className="st47" cx="21.3" cy="14.7" r="0.8" />
        <circle className="st48" cx="21.4" cy="14.7" r="0.8" />
        <circle className="st49" cx="21.6" cy="14.6" r="0.8" />
        <circle className="st50" cx="21.8" cy="14.4" r="0.8" />
        <circle className="st51" cx="21.9" cy="14.3" r="0.8" />
        <circle className="st52" cx="22.1" cy="14.2" r="0.8" />
        <circle className="st53" cx="22.2" cy="14" r="0.8" />
        <circle className="st54" cx="22.4" cy="13.9" r="0.8" />
        <circle className="st55" cx="22.5" cy="13.7" r="0.8" />
        <circle className="st56" cx="22.6" cy="13.6" r="0.8" />
        <circle className="st57" cx="22.7" cy="13.4" r="0.8" />
        <circle className="st58" cx="22.8" cy="13.2" r="0.8" />
        <circle className="st59" cx="22.8" cy="13" r="0.8" />
        <circle className="st60" cx="22.9" cy="12.8" r="0.8" />
        <circle className="st61" cx="22.9" cy="12.6" r="0.8" />
        <circle className="st62" cx="23" cy="12.4" r="0.8" />
        <circle className="st63" cx="23" cy="12.2" r="0.8" />
        <circle className="st64" cx="23" cy="12" r="0.8" />
        <circle className="st65" cx="23" cy="11.7" r="0.8" />
        <circle className="st66" cx="23" cy="11.5" r="0.8" />
        <circle className="st67" cx="22.9" cy="11.3" r="0.8" />
        <circle className="st68" cx="22.9" cy="11.1" r="0.8" />
        <circle className="st69" cx="22.8" cy="10.9" r="0.8" />
        <circle className="st70" cx="22.7" cy="10.7" r="0.8" />
        <circle className="st71" cx="22.7" cy="10.6" r="0.8" />
        <circle className="st72" cx="22.6" cy="10.4" r="0.8" />
        <circle className="st73" cx="22.4" cy="10.2" r="0.8" />
        <circle className="st74" cx="22.3" cy="10.1" r="0.8" />
        <circle className="st75" cx="22.2" cy="9.9" r="0.8" />
        <circle className="st76" cx="22" cy="9.8" r="0.8" />
        <circle className="st77" cx="21.9" cy="9.6" r="0.8" />
        <circle className="st78" cx="21.7" cy="9.5" r="0.8" />
        <circle className="st79" cx="21.6" cy="9.4" r="0.8" />
        <circle className="st80" cx="21.4" cy="9.3" r="0.8" />
        <circle className="st81" cx="21.2" cy="9.2" r="0.8" />
        <circle className="st82" cx="21" cy="9.2" r="0.8" />
        <circle className="st83" cx="20.8" cy="9.1" r="0.8" />
        <circle className="st84" cx="20.6" cy="9.1" r="0.8" />
        <circle className="st85" cx="20.4" cy="9" r="0.8" />
        <circle className="st86" cx="20.2" cy="9" r="0.8" />
        <circle className="st87" cx="20" cy="9" r="0.8" />
        <circle className="st88" cx="19.8" cy="9" r="0.8" />
        <circle className="st89" cx="19.6" cy="9" r="0.8" />
        <circle className="st90" cx="19.4" cy="9" r="0.8" />
        <circle className="st91" cx="19.1" cy="9" r="0.8" />
        <circle className="st92" cx="18.9" cy="9" r="0.8" />
        <circle className="st93" cx="18.7" cy="9" r="0.8" />
        <circle className="st94" cx="18.5" cy="9" r="0.8" />
        <circle className="st95" cx="18.3" cy="9" r="0.8" />
        <circle className="st96" cx="18.1" cy="9" r="0.8" />
        <circle className="st97" cx="17.9" cy="9" r="0.8" />
        <circle className="st98" cx="17.7" cy="9" r="0.8" />
        <circle className="st99" cx="17.5" cy="9" r="0.8" />
        <circle className="st100" cx="17.3" cy="9" r="0.8" />
        <circle className="st101" cx="17.1" cy="9" r="0.8" />
        <circle className="st102" cx="16.9" cy="9" r="0.8" />
        <circle className="st103" cx="16.7" cy="9" r="0.8" />
        <circle className="st104" cx="16.5" cy="9" r="0.8" />
        <circle className="st105" cx="16.3" cy="9" r="0.8" />
        <circle className="st106" cx="16.1" cy="9" r="0.8" />
        <circle className="st107" cx="15.9" cy="9" r="0.8" />
        <circle className="st108" cx="15.6" cy="9" r="0.8" />
        <circle className="st109" cx="15.4" cy="9" r="0.8" />
        <circle className="st110" cx="15.2" cy="9" r="0.8" />
        <circle className="st111" cx="15" cy="9" r="0.8" />
        <circle className="st112" cx="14.8" cy="9" r="0.8" />
        <circle className="st113" cx="14.6" cy="9" r="0.8" />
        <circle className="st114" cx="14.4" cy="9" r="0.8" />
        <circle className="st115" cx="14.2" cy="9" r="0.8" />
        <circle className="st116" cx="14" cy="9" r="0.8" />
        <circle className="st117" cx="13.8" cy="9" r="0.8" />
        <circle className="st118" cx="13.6" cy="9" r="0.8" />
        <circle className="st119" cx="13.4" cy="9" r="0.8" />
        <circle className="st120" cx="13.2" cy="9" r="0.8" />
        <circle className="st121" cx="13" cy="9" r="0.8" />
        <circle className="st122" cx="12.8" cy="9" r="0.8" />
        <circle className="st123" cx="12.6" cy="9" r="0.8" />
        <circle className="st124" cx="12.4" cy="9" r="0.8" />
        <circle className="st125" cx="12.1" cy="9" r="0.8" />
        <circle className="st126" cx="11.9" cy="9" r="0.8" />
        <circle className="st127" cx="11.7" cy="9" r="0.8" />
        <circle className="st128" cx="11.5" cy="9" r="0.8" />
        <circle className="st129" cx="11.3" cy="9" r="0.8" />
        <circle className="st130" cx="11.1" cy="9" r="0.8" />
        <circle className="st131" cx="10.9" cy="9" r="0.8" />
        <circle className="st132" cx="10.7" cy="9" r="0.8" />
        <circle className="st133" cx="10.5" cy="9" r="0.8" />
      </g>
      <circle className="st134" cx="9" cy="9" r="3" />
      <g>
        <circle className="st1" cx="15" cy="21" r="0.8" />
        <circle className="st135" cx="14.8" cy="21" r="0.8" />
        <circle className="st136" cx="14.5" cy="21" r="0.8" />
        <circle className="st137" cx="14.3" cy="21" r="0.8" />
        <circle className="st138" cx="14.1" cy="21" r="0.8" />
        <circle className="st139" cx="13.8" cy="21" r="0.8" />
        <circle className="st140" cx="13.6" cy="21" r="0.8" />
        <circle className="st141" cx="13.4" cy="21" r="0.8" />
        <circle className="st142" cx="13.2" cy="21" r="0.8" />
        <circle className="st143" cx="12.9" cy="21" r="0.8" />
        <circle className="st144" cx="12.7" cy="21" r="0.8" />
        <circle className="st145" cx="12.5" cy="21" r="0.8" />
        <circle className="st146" cx="12.2" cy="21" r="0.8" />
        <circle className="st147" cx="12" cy="21" r="0.8" />
        <circle className="st148" cx="11.8" cy="21" r="0.8" />
        <circle className="st149" cx="11.5" cy="21" r="0.8" />
        <circle className="st150" cx="11.3" cy="21" r="0.8" />
        <circle className="st151" cx="11.1" cy="21" r="0.8" />
        <circle className="st152" cx="10.9" cy="21" r="0.8" />
        <circle className="st153" cx="10.6" cy="21" r="0.8" />
        <circle className="st154" cx="10.4" cy="21" r="0.8" />
        <circle className="st155" cx="10.2" cy="21" r="0.8" />
        <circle className="st156" cx="9.9" cy="21" r="0.8" />
        <circle className="st157" cx="9.7" cy="21" r="0.8" />
        <circle className="st158" cx="9.4" cy="21" r="0.8" />
        <circle className="st159" cx="9.2" cy="20.9" r="0.8" />
        <circle className="st160" cx="9" cy="20.8" r="0.8" />
        <circle className="st161" cx="8.8" cy="20.8" r="0.8" />
        <circle className="st162" cx="8.6" cy="20.7" r="0.8" />
        <circle className="st163" cx="8.4" cy="20.5" r="0.8" />
        <circle className="st164" cx="8.2" cy="20.4" r="0.8" />
        <circle className="st165" cx="8" cy="20.3" r="0.8" />
        <circle className="st166" cx="7.9" cy="20.1" r="0.8" />
        <circle className="st167" cx="7.7" cy="20" r="0.8" />
        <circle className="st168" cx="7.6" cy="19.8" r="0.8" />
        <circle className="st169" cx="7.4" cy="19.6" r="0.8" />
        <circle className="st170" cx="7.3" cy="19.4" r="0.8" />
        <circle className="st171" cx="7.2" cy="19.2" r="0.8" />
        <circle className="st172" cx="7.2" cy="19" r="0.8" />
        <circle className="st173" cx="7.1" cy="18.8" r="0.8" />
        <circle className="st173" cx="7" cy="18.5" r="0.8" />
        <circle className="st174" cx="7" cy="18.3" r="0.8" />
        <circle className="st175" cx="7" cy="18.1" r="0.8" />
        <circle className="st176" cx="7" cy="17.8" r="0.8" />
        <circle className="st177" cx="7" cy="17.6" r="0.8" />
        <circle className="st178" cx="7.1" cy="17.3" r="0.8" />
        <circle className="st179" cx="7.1" cy="17.1" r="0.8" />
        <circle className="st180" cx="7.2" cy="16.9" r="0.8" />
        <circle className="st181" cx="7.3" cy="16.7" r="0.8" />
        <circle className="st182" cx="7.4" cy="16.5" r="0.8" />
        <circle className="st183" cx="7.5" cy="16.3" r="0.8" />
        <circle className="st184" cx="7.6" cy="16.1" r="0.8" />
        <circle className="st185" cx="7.8" cy="15.9" r="0.8" />
        <circle className="st186" cx="7.9" cy="15.8" r="0.8" />
        <circle className="st187" cx="8.1" cy="15.6" r="0.8" />
        <circle className="st188" cx="8.3" cy="15.5" r="0.8" />
        <circle className="st189" cx="8.5" cy="15.4" r="0.8" />
        <circle className="st190" cx="8.7" cy="15.3" r="0.8" />
        <circle className="st191" cx="8.9" cy="15.2" r="0.8" />
        <circle className="st192" cx="9.1" cy="15.1" r="0.8" />
        <circle className="st193" cx="9.3" cy="15.1" r="0.8" />
        <circle className="st194" cx="9.6" cy="15" r="0.8" />
        <circle className="st195" cx="9.8" cy="15" r="0.8" />
        <circle className="st196" cx="10" cy="15" r="0.8" />
        <circle className="st197" cx="10.3" cy="15" r="0.8" />
        <circle className="st198" cx="10.5" cy="15" r="0.8" />
        <circle className="st199" cx="10.7" cy="15" r="0.8" />
        <circle className="st200" cx="11" cy="15" r="0.8" />
        <circle className="st201" cx="11.2" cy="15" r="0.8" />
        <circle className="st202" cx="11.4" cy="15" r="0.8" />
        <circle className="st203" cx="11.7" cy="15" r="0.8" />
        <circle className="st204" cx="11.9" cy="15" r="0.8" />
        <circle className="st205" cx="12.1" cy="15" r="0.8" />
        <circle className="st206" cx="12.3" cy="15" r="0.8" />
        <circle className="st207" cx="12.6" cy="15" r="0.8" />
        <circle className="st208" cx="12.8" cy="15" r="0.8" />
        <circle className="st209" cx="13" cy="15" r="0.8" />
        <circle className="st210" cx="13.3" cy="15" r="0.8" />
        <circle className="st2" cx="13.5" cy="15" r="0.8" />
      </g>
    </PathCSS>
  );
};

export default Path;
