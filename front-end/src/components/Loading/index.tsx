import { Loader, LoaderSpan, LoaderSpanBefore } from "./styles";

export default function Loading() {
  return (
    <>
      <Loader>
        <LoaderSpan>
          <LoaderSpanBefore />
        </LoaderSpan>
      </Loader>
    </>
  );
}
