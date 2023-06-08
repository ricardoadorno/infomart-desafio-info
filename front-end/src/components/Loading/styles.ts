"use client";

import styled, { keyframes } from "styled-components";

const loader1Animation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const loader2Animation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const loader3Animation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  display: block;
  height: 32px;
  width: 32px;
  animation: ${loader1Animation} 3s linear infinite;
`;

export const LoaderSpan = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  clip: rect(16px, 32px, 32px, 0);
  animation: ${loader2Animation} 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`;

export const LoaderSpanBefore = styled.span`
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  border: 3px solid transparent;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${loader3Animation} 3s infinite;
`;
