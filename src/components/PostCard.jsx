import { Link } from "react-router-dom";

export function PostCard({ id, title, body, lazyLoading }) {
  return (
    <div className={`card ${lazyLoading ? "skeleton" : undefined}`}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link
          className={`btn ${lazyLoading ? "skeleton skeleton-btn" : undefined}`}
          to={`/posts/${id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export function SkeletonPostCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className="skeleton"
          style={{
            width: "15em",
          }}
        />
        <div
          className="skeleton"
          style={{
            width: "15em",
          }}
        />
      </div>
      <div className="card-body">
        <div className="card-preview-text">
          <div className="skeleton" />
          <div className="skeleton" />
          <div className="skeleton" />
          <div className="skeleton" />
        </div>
      </div>
      <div className="card-footer">
        <div className="skeleton skeleton-btn" />
      </div>
    </div>
  );
}
