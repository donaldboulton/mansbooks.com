import { Database } from "@lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";

const COMMENT_TABLE_NAME = 'comments';

const ReadComments = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = createClientComponentClient<Database>({
    isSingleton: false,
  });
  const slug = req.query.slug.toString();
  if (typeof slug === "undefined") return;
  switch (req.method) {
    // Get all comments
    case "GET":
      const { data: getData, error: getError } = await supabase
        .from(COMMENT_TABLE_NAME)
        .select("*")
        .eq("slug", +slug);
      if (getError) {
        return res.status(500).json({ message: getError.message });
      }
      return res.status(200).json(getData);
    // Add comment
    case "POST":
      const { comment } = req.body;
      const { data: postData, error: postError } = await supabase
        .from(COMMENT_TABLE_NAME)
        .insert(comment);
      if (postError) {
        return res.status(500).json({ message: postError.message });
      }
      return res.status(200).json(postData);
    // Edit comment
    case "PATCH":
      const { commentId: editcommentId, payload } = req.body;
      const { data: patchData, error: patchError } = await supabase
        .from(COMMENT_TABLE_NAME)
        .update({ payload })
        .eq("id", editcommentId);
      if (patchError) {
        return res.status(500).json({ message: patchError.message });
      }
      return res.status(200).json(patchData);
    // Delete comment
    case "DELETE":
      const { comment_id: deleteCommentId } = req.query;
      if (typeof deleteCommentId === "string") {
        const { data: deleteData, error: deleteError } = await supabase
          .from(COMMENT_TABLE_NAME)
          .delete()
          .eq("id", deleteCommentId + "");
        if (deleteError) {
          return res.status(500).json({ message: deleteError.message });
        }
        return res.status(200).json(deleteData);
      }
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
};

export default ReadComments;
