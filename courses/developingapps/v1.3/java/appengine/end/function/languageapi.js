// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

function analyze(text) {
    const document = {
        content: text,
        type: 'PLAIN_TEXT'
    };
    return client.analyzeSentiment({ document }).then(results => {
        const sentiment = results[0];
        return sentiment.documentSentiment.score;
    });
}
module.exports = {
    analyze
};