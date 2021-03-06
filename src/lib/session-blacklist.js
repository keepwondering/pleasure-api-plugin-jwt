import { Schema } from 'mongoose'

export default function SessionBlacklist (mongooseApi) {
  const sessionBlacklistSchema = new Schema({
    created: {
      type: Date,
      default: Date.now
    },
    sessionId: {
      type: String,
      required: true,
      unique: true
    },
    expires: {
      type: Date,
      default: Date.now
    },
    sessionExpires: {
      type: Date,
      required: true,
      options: {
        meta: {
          description: `Moment on which the JWT session originally expired`
        }
      }
    }
  }, {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  })

  mongooseApi.model('pleasure-session-blacklist', sessionBlacklistSchema, 'pleasure-session-blacklist')
}
