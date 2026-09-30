"use client";
import { useState } from "react";
export default function ClaimForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="form-success" role="status">
        <strong>Thank you for the question.</strong>
        <br />
        Your suggestion has been recorded for this demo. Submission does not guarantee publication.
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-grid">
        <div className="form-field full">
          <label htmlFor="claim">
            The claim <span>Required</span>
          </label>
          <textarea required id="claim" placeholder="What exactly did you encounter?" />
        </div>
        <div className="form-field">
          <label htmlFor="url">
            URL or source <span>Optional</span>
          </label>
          <input id="url" type="url" placeholder="https://" />
        </div>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select id="category" defaultValue="">
            <option value="" disabled>
              Select a topic
            </option>
            {[
              "History",
              "Science",
              "Technology",
              "Society",
              "Culture",
              "Politics & Governance",
              "Internet Myths",
              "Famous Quotes",
              "Statistics & Data",
              "Other",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        <div className="form-field full">
          <label htmlFor="where">Where did you encounter it?</label>
          <input id="where" placeholder="A book, post, conversation, video..." />
        </div>
        <div className="form-field full">
          <label htmlFor="why">Why should it be investigated?</label>
          <textarea id="why" placeholder="What made you curious about this claim?" />
        </div>
        <div className="form-field full">
          <label htmlFor="material">
            Supporting material <span>Optional</span>
          </label>
          <textarea id="material" placeholder="Share any useful context, links, or references." />
        </div>
        <div className="form-field full">
          <label htmlFor="email">
            Email <span>Optional; only used if we need to follow up</span>
          </label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>
      </div>
      <button className="button button-dark form-submit" type="submit">
        Send your suggestion <span aria-hidden="true">→</span>
      </button>
      <p>
        Submission does not guarantee publication. We review suggestions according to our public
        methodology.
      </p>
    </form>
  );
}
