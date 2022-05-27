import React from "react";

interface TaskProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 我也不知道
   */
  primary?: boolean;
}

export function Task({ title = "Task", primary = false }: TaskProps) {
  return <div className='btn'>{title+primary}</div>;
}
